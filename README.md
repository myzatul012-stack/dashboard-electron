# dashboard-electron

A desktop application built with Electron, replicating the dashboard web application from Task 1
.
## Authentication

This application supports two authentication methods:

### 1. API Login
- Email: user@aemenersol.com
- Password: Test@123

### 2. Local Login (PouchDB)
If API login fails, the app will validate credentials against a local PouchDB.
- Email: local@test.com
- Password: Local@123

> **Note:** Dashboard data will not be displayed when logged in as a local user, as it requires a valid API token. Please use the API credentials above to view the full dashboard.
