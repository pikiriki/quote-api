# Quote API

A small Node.js backend that returns a fixed quote and its author as JSON.

Built to understand JavaScript objects, JSON serialization, HTTP response
headers, and status codes.

## Requirements

- Node.js
- A Terminal
- A browser for checking responses

The server uses Node's built-in `node:http` module.
No external packages are required.

## Run locally

Open Terminal inside the project folder and run:

```bash
node server.js
```

Expected Terminal output:

```text
Server running at http://localhost:3000
```

Visit:

```text
http://localhost:3000/quote
```

Stop the server with Control + C.

After editing server.js, save the file and restart Node to load the changes.

## Routes

| Path | Status | Content-Type | Purpose |
|---|---|---|---|
| `/` | `200` | `text/plain; charset=utf-8` | Show guidance |
| `/quote` | `200` | `application/json` | Return the quote |
| Any other path | `404` | `text/plain; charset=utf-8` | Report an unknown route |

### Root response

```text
Welcome to Quote API. Visit /quote to get a quote.
```

### Quote response

```json
{
  "quote": "Stay curious.",
  "author": "Anonymous"
}
```

The actual response may appear on one line. Whitespace does not change
the represented data.

### Unknown-route response

For example, requesting `/quotes` returns status `404` with:

```text
Route not found.
```

## How it works

At startup:

1. Node creates `quoteData`, a JavaScript object.
2. `JSON.stringify(quoteData)` creates a JSON string.
3. The server begins listening on port 3000.

For each request:

1. The server parses the request URL.
2. It checks the pathname.
3. It sets the response status and Content-Type.
4. It sends the appropriate body and ends the response.

For `/quote`, the response body is the JSON string created at startup.

## What I learned

- Objects group related values under property names.
- Dot notation reads an individual property, such as `quoteData.author`.
- A JavaScript object and JSON text are different values.
- `JSON.stringify()` serializes our object into a string.
- Node's `res.end()` does not accept a plain JavaScript object.
- `Content-Type` describes the body; it does not convert the data.
- Headers must be set before they are sent.
- Status `200` reports success; `404` reports a missing route.
- `return` exits the request handler after a route responds.
- `console.log()` writes to Terminal; `res.end()` sends a response.
- Valid JSON can still contain incorrect property names.
- DevTools lets me inspect response status, headers, and body separately.

## Project files

| File | Purpose |
|---|---|
| `server.js` | Quote data and HTTP server |
| `package.json` | Node project information |
| `.gitignore` | Files and folders Git should ignore |
| `README.md` | Project documentation |

## Scope

This project returns one fixed, locally defined quote.
It does not use a database, an external quote service, or random selection.
The current routing checks paths only; it does not restrict HTTP methods.

## Troubleshooting

- **Port already in use:** stop the previous server using port 3000.
- **Old response after editing:** save the file, stop Node, and restart it.
- **404 on `/quotes`:** the defined endpoint is `/quote`.
- **Object-type error:** send the serialized `json` string to `res.end()`.
- **Missing JSON Content-Type:** check that `res.setHeader()` runs before
  `res.end()` in the quote route.