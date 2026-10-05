# 🧪 SMSGate Google Apps Script Example

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stars][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

A Google Apps Script function that sends a test SMS through the SMS Gateway for Android API. Part of the SMSGate ecosystem - see the [central docs](https://docs.sms-gate.app/) for the full API reference.

## 📖 About

This example is a single Apps Script function ([code.gs](code.gs)) that authenticates with the SMS Gateway 3rd-party API using script properties and posts a test message to one or more phone numbers. It is a minimal starting point for Google Workspace integrations (Sheets, Gmail, Forms) that send SMS.

## 📚 Table of Contents

- [📖 About](#-about)
- [📚 Table of Contents](#-table-of-contents)
- [⭐ Features](#-features)
- [📦 Prerequisites](#-prerequisites)
- [🚀 Quickstart](#-quickstart)
- [💻 Usage](#-usage)
- [🔌 How It Works](#-how-it-works)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [⚖️ License](#️-license)

## ⭐ Features

- Single-function script, no external dependencies
- API credentials stored as Apps Script script properties
- Sends to one or more phone numbers in a single request

## 📦 Prerequisites

- A Google account ([Google Apps Script](https://script.google.com/))
- SMS Gateway for Android installed and configured on a device
- SMS Gateway API username and password (from the app's Settings)

## 🚀 Quickstart

1. Open [Google Apps Script](https://script.google.com/) and create a new project.
2. Replace the editor contents with the script from [code.gs](code.gs).
3. Add script properties in `Project Settings` -> `Script Properties`:

| Property | Value |
| -------- | ----- |
| `username` | SMS Gateway API username |
| `password` | SMS Gateway API password |

4. Run the `sendSMS` function from the editor and authorize the script when prompted.
5. Open `View` -> `Logs` to see the API response.

### Deploy from the CLI with clasp (optional)

The repository ships [code.gs](code.gs) only - no clasp configuration (`appsscript.json`, `.clasp.json`) is included. To push the script from the CLI instead of the editor:

```bash
npm install -g @google/clasp
clasp login
clasp create --type standalone --title "SMSGate Example"
clasp push
```

`clasp create` generates the Apps Script manifest; `clasp push` uploads `code.gs`. After deployment, set the `username` and `password` script properties in the project settings.

### Triggers

The example defines no triggers - `sendSMS` runs on demand from the editor. To automate it, add a time-driven or event trigger from the editor's `Triggers` panel.

## 💻 Usage

Customize the message and recipients in [code.gs](code.gs): edit `data.message` and the `data.phoneNumbers` array, then run `sendSMS` again.

## 🔌 How It Works

All logic lives in [code.gs](code.gs):

1. `PropertiesService` reads the `username` and `password` script properties
2. Credentials are Base64-encoded into a Basic Authorization header
3. `UrlFetchApp` POSTs `{message, phoneNumbers}` to `https://api.sms-gate.app/3rdparty/v1/message`
4. The HTTP response is written to the execution log via `Logger.log`

## 📚 Documentation

- [Central docs](https://docs.sms-gate.app/)
- [Sending messages](https://docs.sms-gate.app/features/sending-messages/)
- [Google Apps Script reference](https://developers.google.com/apps-script/reference)
- [GitHub repository](https://github.com/android-sms-gateway/example-google-apps-script)

## 🤝 Contributing

Contributions are welcome - open an issue or submit a pull request on the [GitHub repository](https://github.com/android-sms-gateway/example-google-apps-script).

## ⚖️ License

Apache-2.0. See [LICENSE](LICENSE).

<!-- Reference-style badge URLs: style=for-the-badge is mandatory -->
[contributors-shield]: https://img.shields.io/github/contributors/android-sms-gateway/example-google-apps-script?style=for-the-badge
[contributors-url]: https://github.com/android-sms-gateway/example-google-apps-script/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/android-sms-gateway/example-google-apps-script?style=for-the-badge
[forks-url]: https://github.com/android-sms-gateway/example-google-apps-script/network/members
[stars-shield]: https://img.shields.io/github/stars/android-sms-gateway/example-google-apps-script?style=for-the-badge
[stars-url]: https://github.com/android-sms-gateway/example-google-apps-script/stargazers
[issues-shield]: https://img.shields.io/github/issues/android-sms-gateway/example-google-apps-script?style=for-the-badge
[issues-url]: https://github.com/android-sms-gateway/example-google-apps-script/issues
[license-shield]: https://img.shields.io/github/license/android-sms-gateway/example-google-apps-script?style=for-the-badge
[license-url]: https://github.com/android-sms-gateway/example-google-apps-script/blob/master/LICENSE
