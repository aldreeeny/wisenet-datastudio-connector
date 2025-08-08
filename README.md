# Wisenet Data Studio Community Connector

This project is a [Google Data Studio](https://developers.google.com/datastudio) Community Connector for Wisenet. It allows you to connect your Wisenet account to Data Studio and visualize data from various Wisenet endpoints.

## Features

- Connect to Wisenet using an API key (no OAuth required).
- Select from a wide range of Wisenet endpoints (Agents, Assessors, AuditLogs, Checklists, CourseEnrollments, etc.).
- Dynamic schema: Each endpoint exposes its own set of fields and types.
- Handles large datasets with pagination.
- Designed for easy deployment as a Google Apps Script Data Studio connector.

## File Structure

- `Auth.js`  
  Handles authentication (API key only, no OAuth).

- `Config.js`  
  Defines the configuration UI for entering the API key and selecting the endpoint.

- `Schema.js`  
  Dynamically builds the schema for the selected endpoint.

- `Data.js`  
  Fetches data from the Wisenet API, handles pagination, and transforms the data for Data Studio.

- `appsscript.json`  
  Project manifest for Apps Script, including Data Studio connector metadata.

- `.clasp.json`  
  Configuration for local development with [clasp](https://github.com/google/clasp).

## Setup & Deployment

1. **Clone or copy the project** to your local machine.
2. **Install [clasp](https://github.com/google/clasp)** if you want to develop locally.
3. **Push the code to Google Apps Script** using clasp or copy files into a new Apps Script project.
4. **Deploy as a Data Studio Community Connector:**
   - In the Apps Script editor, click **Deploy > New deployment**.
   - Select **Add-on** or **Web app** as appropriate.
   - Set the necessary scopes and deploy.
5. **Use in Data Studio:**
   - Add the connector to your Data Studio account.
   - Enter your Wisenet API key and select the desired endpoint.
   - Build reports and dashboards using your Wisenet data.

## Security

- **Do not share your API key** publicly.
- The connector does not use OAuth; access is controlled via the API key you provide.


## License