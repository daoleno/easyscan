# EasyScan

Search for Web3 information easily.

## Prerequisites

### Initialize database

create schema

```sh
psql 'postgresql://postgres:postgres@localhost:5432/easyscan' -f schema.sql
```

### Export web3 information

[rss_exporter](https://github.com/daoleno/rss_exporter)

Parse OPML file and export RSS feeds to a database.

## Run

```sh
# Install dependencies
yarn

# Run the app
yarn dev
```
