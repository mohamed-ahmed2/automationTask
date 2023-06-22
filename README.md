
## Cypress Automation for Judge.me

This project contains Cypress automation tests for the Judge.me website.

### Requirements

Before running the project, ensure that you have the following software installed:

- [Node.js](https://nodejs.org) 

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

   Alternatively, if you downloaded and unzipped the project, navigate to the unzipped directory.

2. Navigate to the project directory:

   ```bash
   cd <project_directory>
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the Project

To run the Cypress tests, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the project directory
3. Run the Cypress tests in headed mode:

   ```bash
   npx cypress run --headed
   ```

 To run tests with different browsers use the following commands :
1. Chrome : 
    ```bash
   npx cypress run --headed -b chrome
   ```
2. Firefox : 
    ```bash
   npx cypress run --headed -b firefox
   ```

Alternatively, you can run the tests in headless mode using the following command:

   ```bash
  npx cypress run --headless 
   ```
