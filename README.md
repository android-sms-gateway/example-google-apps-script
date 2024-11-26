# Example Google Apps Script

Apps Script is a cloud-based JavaScript platform powered by Google Drive that lets you integrate with and automate tasks across Google products.

This repository contains a Google Apps Script function that sends a test SMS message via [SMS Gateway for Android™](https://sms-gate.app/).

## Prerequisites

1. A Google account to access Google Apps Script.
2. An Android device with the SMS Gateway app installed and configured.
3. Your SMS Gateway API username and password.

## Getting Started

Follow these steps to set up and use this script:

1. Open Google Apps Script:
   - Go to [Google Apps Script](https://script.google.com/).
   - Click `New Project`.

2. Copy and paste the content of the [code.gs](./code.gs) file into the script editor.

3. Set up script properties:
   - Navigate to `Project Settings` (gear icon).
   - Add the following script properties:
     - `username`: Your SMS Gateway API username.
     - `password`: Your SMS Gateway API password.

4. Save the project and run the `sendSMS` function:
   - Click on the play button ▶️ in the toolbar.
   - Grant permissions when prompted.

5. Check the execution logs (`View > Logs`) to verify the status of the SMS message.

## Script Properties

The script uses the following properties to authenticate with SMS Gateway:

- `username`: Your SMS Gateway API username.
- `password`: Your SMS Gateway API password.

You can manage these properties in `Project Settings` under the `Script Properties` section.

## Usage

The `sendSMS` function sends a test SMS message to a predefined number.

To customize:
1. Update the `data.message` field in the script with your custom message.
2. Add or modify phone numbers in the `data.phoneNumbers` array.

The script sends the SMS via the SMS Gateway API and logs the response in the execution logs.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](./README.md) file for details.

## Acknowledgements

Built with [Codeium](https://codeium.com).
