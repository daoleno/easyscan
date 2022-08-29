import prisma from "@/lib/prisma";
import type { SearchResult } from "@/types/common";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse<SearchResult>> {
  let { q, cursor } = req.query;
  if (!q) {
    res.status(400).send("Missing query param");
    return;
  }

  if (Array.isArray(q)) {
    res.status(400).send("Query param must be a string");
    return;
  }

  q = q.split(" ").join("&");

  try {
    if (cursor) {
      const results = await prisma.feeds.findMany({
        take: 10,
        skip: 1,
        cursor: {
          id: cursor as any,
        },
        where: {
          title: {
            search: q,
          },
          description: {
            search: q,
          },
          author: {
            search: q,
          },
          category: {
            search: q,
          },
          content_value: {
            search: q,
          },
        },
      });

      const lastRecordInResults = results[results.length - 1];
      const next = lastRecordInResults ? lastRecordInResults.id : null;
      res.status(200).json({
        results,
        next,
      });
    }

    const results = await prisma.feeds.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        link: true,
      },
      take: 10,
      where: {
        title: {
          search: q,
        },
        description: {
          search: q,
        },
        author: {
          search: q,
        },
        category: {
          search: q,
        },
        content_value: {
          search: q,
        },
      },
    });

    if (results.length === 0) {
      res.status(404).send(results);
      return;
    }

    const lastRecordInResults = results[results.length - 1];
    const next = lastRecordInResults.id;

    return res.status(200).json({
      results,
      next,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}
