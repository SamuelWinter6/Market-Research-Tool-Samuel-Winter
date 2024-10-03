# Market-Research-Tool-Samuel-Winter

### Overview
The Market Research Tool is an interactive web application that allows users to retrieve and view key financial and company data using stock ticker symbols. The app leverages the Financial Modeling Prep API to fetch real-time data on publicly traded companies, making it easy for users to get insights into a company's financial health and business operations.

### Features
Search Functionality: Users can search for a company by entering its stock ticker (e.g., AAPL, TSLA) and receive detailed information.
Financial Data: Displays key financial indicators like price, market capitalization, beta, and more.
Company Information: Shows details such as the CEO, sector, industry, employee count, and contact information.
Responsive Design: The layout adapts to different screen sizes, ensuring a smooth user experience on both desktop and mobile devices.
API Integration: Fetches real-time data from the Financial Modeling Prep API.

### API Usage
This application makes use of the Financial Modeling Prep API to fetch data about companies based on their stock ticker symbols. Below is an overview of how the API is used:

Endpoint: The app sends a GET request to the https://financialmodelingprep.com/api/v3/profile/{ticker} endpoint to fetch a company's profile.
Parameters: The {ticker} is dynamically provided by the user as an input in the search bar (e.g., AAPL for Apple).
API Key: The app uses a free API key for authentication, which is included in the API URL. This key allows access to company profile information. With 250 requests a Day based on the free plan from the API endpoint.
Data Handling: The data is fetched asynchronously using JavaScript's async/await syntax, and error handling is implemented to catch any issues with the request or invalid ticker symbols.
