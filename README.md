# AgensGraphViewer
Web-based user interface that provides visualization of graph data stored in an AgensGraph database. 

This is a sub-project of [AgensGraph](https://github.com/BitnineGlobal/agensgraph/tree/v2.14)

# Recommended Node Version & install module

- Node version - 14.16.0
- Node Module - pm2 

Install latest **pm2** with :

```bash
npm i pm2
```

> [pm2](https://www.npmjs.com/package/pm2) is an NPM module to run the project in production mode, and hence is optional for getting started with setting up development environment for AgensGraphViewer 

# Installing AgenGraphViewer

- Install the required node modules using  :  

```bash
npm run setup
```

# Running AgensGraphViewer

- Run AgenGraphViewer using : 

```bash
npm run start
```

>This will start AgensGraphViewer on http://localhost:3000 if port 3000 is free.

---

# How to start using Age-Viewer

AgensGraphViewer is a graphical user interface for AgensGraph, so it needs an AgensGraph server running on the background. 

For the other settings or usage instructions, please follow [AgensGraph's documentation](https://bitnine.net/documentations/quick-guide-1-3.html).
	
---

### Connect AgensGraphViewer to AgensGraph Database

**Standard Connection Settings**

- Database type: AgensGraph
- Connect URL:  127.0.0.1
- Connect Port: 5432

