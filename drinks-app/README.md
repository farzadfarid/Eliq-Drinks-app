# Elik Application

## Overview

Elik is an application designed for receiving beverage products from a server using a White-Label App (WLA) approach. The application comprises two main pages: one displaying all available products and another providing detailed information about specific products.

## Customization via config.json

To facilitate user interface (UI) customization, Elik employs a `config.json` file. This file contains settings for personalizing various aspects of the application's appearance. By modifying this configuration file, customers can easily tailor their pages according to their preferences.

## Usage

To use Elik, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## Project Structure

The structure of the application is organized as follows:

1. **Products Folder**:
   - Contains components for all products and product details.
   - Includes model and service folders for product data handling.

2. **Shared Folder**:
   - Common components such as header, footer, and loading components.
   - Error handling folder with an interceptor file.

3. **Environment Folder**:
   - Contains server path settings.

4. **Assets Folder**:
   - Includes configuration and image folders.
   - The configuration file (`config.json`) contains various settings for UI customization and API endpoints.

## Configuration Settings

The `config.json` file includes the following customizable settings:

```json
{
    "titleStyle": {
        "light": "lightStyle",
        "dark": "darkStyle"
    },
    "bgColor": {
        "light": "#fff",
        "dark": "#262626"
    },
    "headerPageStyle": {
        "headerPage": "headerPage"
    },
    "colors": {
        "primary": "primary",
        "secondary": "secondary",
        "info": "info",
        "warning": "warning",
        "danger": "danger",
        "linkStyle": "linkStyle"
    },
    "links": {
        "linkStyle": "linkStyle"
    },
    "cardHeader": {
        "cardPrimary": "bg-primary",
        "cardSecondary": "bg-secondary",
        "cardInfo": "bg-info",
        "cardWarning": "bg-light-header",
        "cardDanger": "bg-danger"
    },
    "cardFooter": {
        "cardPrimary": "bg-primary",
        "cardSecondary": "bg-secondary",
        "cardInfo": "bg-info",
        "cardWarning": "bg-warning",
        "cardDanger": "bg-danger"
    },
    "fonts": {
        "heading": "Roboto",
        "body": "Open Sans",
        "size": {
            "small": "fontSizeSmall",
            "medium": "fontSizeMedium",
            "large": "fontSizeLrge"
        }
    },
    "logo": [
        "assets/images/logo1.png"
    ],
    "api_endpoints": {
        "drinks_list": "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
        "drink_details": "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={drink_id}"
    }
}
```
### Explanation:

- **`titleStyle`**: Defines styles for titles in light and dark themes.
  - `light`: CSS class for titles in light theme.
  - `dark`: CSS class for titles in dark theme.

- **`bgColor`**: Defines background colors for light and dark themes.
  - `light`: Background color in light theme.
  - `dark`: Background color in dark theme.

- **`headerPageStyle`**: Defines styles for the header page.
  - `headerPage`: CSS class for the header page.

- **`colors`**: Defines color styles for various UI elements.
  - `primary`, `secondary`, `info`, `warning`, `danger`: CSS classes for different color styles.
  - `linkStyle`: CSS class for links.

- **`links`**: Defines styles for links.
  - `linkStyle`: CSS class for links.

- **`cardHeader`**: Defines background colors for card headers.
  - `cardPrimary`, `cardSecondary`, `cardInfo`, `cardWarning`, `cardDanger`: CSS classes for different card header colors.

- **`cardFooter`**: Defines background colors for card footers.
  - `cardPrimary`, `cardSecondary`, `cardInfo`, `cardWarning`, `cardDanger`: CSS classes for different card footer colors.

- **`fonts`**: Defines font styles for headings and body text.
  - `heading`: Font family for headings.
  - `body`: Font family for body text.
  - `size`: Defines font sizes for different text sizes (`small`, `medium`, `large`).

- **`logo`**: Defines the path to the application logo image.
  - `assets/images/logo1.png`: Path to the logo image file.

- **`api_endpoints`**: Defines endpoints for API requests.
  - `drinks_list`: Endpoint for retrieving a list of alcoholic drinks.
  - `drink_details`: Endpoint for retrieving details of a specific drink by ID.
    - Note: `{drink_id}` should be replaced with the actual ID of the drink.


## Feedback

We welcome any feedback or suggestions for improving Elik. Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


