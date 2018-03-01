# @afshin/custom404-extension

A JupyterLab extension that handles 404 errors.


## Prerequisites

* [JupyterLab](https://github.com/jupyterlab/jupyterlab)

## Installation

```bash
jupyter labextension install @afshin/custom404-extension
jupyter labextension disable @jupyterlab/application-extension:notfound
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

