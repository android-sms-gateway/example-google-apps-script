<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![License][license-shield]][license-url]
[![Issues][issues-shield]][issues-url]
[![Stars][stars-shield]][stars-url]



<!-- PROJECT TITLE -->
<br />
<div align="center">
  <h3 align="center">SMSGate Google Apps Script Example</h3>

  <p align="center">
    Zero-dependency Google Apps Script that sends a test SMS via the SMSGate 3rd-party API
    <br />
    <a href="https://github.com/android-sms-gateway/example-google-apps-script"><strong>Explore the repo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/android-sms-gateway/example-google-apps-script/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/android-sms-gateway/example-google-apps-script/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
    - [Script Properties](#script-properties)
    - [Deploy from the CLI with clasp](#deploy-from-the-cli-with-clasp)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)



<!-- ABOUT THE PROJECT -->
## About The Project

This repository contains a single Google Apps Script function ([`code.gs`](code.gs)) that sends a test SMS message through the [SMSGate App](https://github.com/capcom6/android-sms-gateway) 3rd-party API. The entire implementation lives in one file with no external dependencies, so it is a minimal starting point for Google Workspace integrations (Sheets, Gmail, Forms) that send SMS.

API credentials are read from script properties rather than hardcoded, and a single request can target one or more phone numbers. See the [central docs](https://docs.sms-gate.app/) for the full API reference.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Google Apps Script][GoogleAppsScript-shield]][GoogleAppsScript-url] — the runtime, using only built-in services
* [![SMSGate][SMSGate-shield]][SMSGate-url] — 3rd-party REST API, called through `UrlFetchApp`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- A **Google account** ([Google Apps Script](https://script.google.com/))
- **SMSGate App** installed and configured on a device
- **SMSGate API username and password** — available in the app's settings

### Setup

1. Open [Google Apps Script](https://script.google.com/) and create a new project.
2. Replace the editor contents with the script from [`code.gs`](code.gs).
3. Add the script properties described in [Script Properties](#script-properties).
4. Run the `sendSMS` function from the editor and authorize the script when prompted.
5. Click **Execution log** at the top of the editor to see the API response.

#### Script Properties

| Property   | Value                      |
| ---------- | -------------------------- |
| `username` | SMSGate API username       |
| `password` | SMSGate API password       |

These properties are managed under `Project Settings` -> `Script Properties`.

#### Deploy from the CLI with clasp

This repository ships [`code.gs`](code.gs) only — no clasp configuration (`appsscript.json`, `.clasp.json`) is included. To push the script from the command line instead of the editor, first enable the [Google Apps Script API](https://script.google.com/home/usersettings), then:

```sh
npm install -g @google/clasp
clasp login
clasp create --type standalone --title "SMSGate Example"
clasp push
```

`clasp create` generates the Apps Script manifest, `clasp push` uploads `code.gs`. After deployment, set the `username` and `password` script properties in the project settings.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

The function runs on demand from the editor. To change what is sent, edit the `data.message` field and the `data.phoneNumbers` array in [`code.gs`](code.gs), then run `sendSMS` again.

The example defines no triggers. To automate it, add a time-driven or event trigger from the editor's `Triggers` panel.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- HOW IT WORKS -->
## How It Works

1. `PropertiesService` reads the `username` and `password` script properties.
2. The credentials are Base64-encoded into a Basic `Authorization` header.
3. `UrlFetchApp` POSTs `{message, phoneNumbers}` to `https://api.sms-gate.app/3rdparty/v1/message`.
4. The HTTP response is written to the execution log via `Logger.log`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue. Don't forget to give the project a star!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Apache-2.0 License. See [`LICENSE`](LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/android-sms-gateway/example-google-apps-script](https://github.com/android-sms-gateway/example-google-apps-script)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Google Apps Script reference](https://developers.google.com/apps-script/reference)
* [Sending messages with the 3rd-party API](https://docs.sms-gate.app/features/sending-messages/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS -->
[license-shield]: https://img.shields.io/github/license/android-sms-gateway/example-google-apps-script?style=for-the-badge
[license-url]: https://github.com/android-sms-gateway/example-google-apps-script/blob/master/LICENSE
[issues-shield]: https://img.shields.io/github/issues/android-sms-gateway/example-google-apps-script?style=for-the-badge
[issues-url]: https://github.com/android-sms-gateway/example-google-apps-script/issues
[stars-shield]: https://img.shields.io/github/stars/android-sms-gateway/example-google-apps-script?style=for-the-badge
[stars-url]: https://github.com/android-sms-gateway/example-google-apps-script/stargazers
[GoogleAppsScript-shield]: https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=googleappsscript&logoColor=white
[GoogleAppsScript-url]: https://script.google.com/
[SMSGate-shield]: https://img.shields.io/badge/SMSGate-3A7D44?style=for-the-badge&logo=smsgate&logoColor=white
[SMSGate-url]: https://sms-gate.app/