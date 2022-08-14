import { feeds } from "@prisma/client";
import type { PropsWithChildren } from "react";

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

export type WithClassName<T = {}> = T & {
  className?: string;
};

export interface ModalProps extends WithChildren {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
}

export type SearchResult = {
  results: feeds[];
  next: string;
};
