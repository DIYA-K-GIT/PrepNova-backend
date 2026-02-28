PrepNova AI 🎯
Basic Details
Team Name:

Scribble Dribble

Team Members

Member 1: Helen Eldho – Model Engineering College, Thrikkakkara

Member 2: Sameeha Fathima – Model Engineering College, Thrikkakkara

Hosted Project Link

https://prepnova-backend.onrender.com (Chrome extension backend deployed link)

Project Description

PrepNova AI is an AI-powered Chrome Extension that helps students stay productive while browsing. It summarizes webpage content and generates quick quizzes using Gemini AI, enabling faster understanding and active revision directly from any website.

The Problem Statement

Students often get distracted while browsing and struggle to quickly understand lengthy web content. There is no integrated tool that combines summarization, quiz generation, and focus assistance inside the browser itself.

The Solution

PrepNova AI extracts webpage content, securely sends it to a Node.js backend, and uses Gemini API to generate summaries and quizzes. The backend masks the API key for security, ensuring safe AI integration while delivering intelligent learning assistance directly in the browser.

Technical Details
Technologies/Components Used
For Software:

Languages used:

JavaScript

HTML

CSS

Frameworks used:

Node.js (Backend)

Libraries used:

Express.js

Axios

CORS

Chrome Extensions API

Tools used:

VS Code

Git & GitHub

Chrome Developer Tools

Google Gemini API

Features

AI-powered webpage summarization

Automatic quiz generation from extracted content

Focus reminder system

Works on all websites

Secure API key masking via Node backend

Clean and aesthetic blue-themed UI

Implementation
For Software
Installation
Clone the Repository
git clone https://github.com/DIYA-K-GIT/PrepNova-frontend.git
git clone https://github.com/DIYA-K-GIT/PrepNova-backend.git
cd PrepNova-frontend
cd PrepNova-backend
Backend Setup
cd backend
npm install

Create a .env file inside backend folder:

GEMINI_API_KEY=your_api_key_here
PORT=3000
Run Backend
node server.js

Server runs at:

http://localhost:3000
Load Chrome Extension

Open Chrome

Go to chrome://extensions/

Enable Developer Mode

Click Load Unpacked

Select the extension folder

Project Documentation
For Software
Screenshots (Add at least 3)
main interface of extension pop up
<img width="1782" height="970" alt="Screenshot 2026-02-28 083445" src="https://github.com/user-attachments/assets/d52fae6c-380a-492a-8214-2ce059201d44" />
summarizing using ai
<img width="417" height="758" alt="Screenshot 2026-02-28 083528" src="https://github.com/user-attachments/assets/185291ef-7461-4e72-8a49-086cf617d23f" />
ai quiz generation
<img width="504" height="771" alt="Screenshot 2026-02-28 083541" src="https://github.com/user-attachments/assets/82f515c4-ca04-42b7-acae-8dd4617521eb" />
toggle mode on distraction restricting window(youtube,netflix,instagram etc.)
<img width="1879" height="949" alt="Screenshot 2026-02-28 083613" src="https://github.com/user-attachments/assets/82286f94-f076-4d85-973c-2242bf530df9" />
reminder pop up after break
<img width="750" height="368" alt="Screenshot 2026-02-28 083658" src="https://github.com/user-attachments/assets/0f1a6c16-3593-416f-8762-e62583c63d8f" />

Diagrams
System Architecture

Architecture Overview:

User → Chrome Extension → Node Backend → Gemini API → Backend → Extension → User
graph LR
    User[User]
   
    subgraph Client ["Client (Browser)"]
        ChromeExt[Chrome Extension]
        Popup[Popup UI]
    end
   
    subgraph Server ["Server (Cloud)"]
        NodeBackend[Node.js Backend]
    end
   
    subgraph external ["External AI"]
        GeminiAPI((Gemini AI API))
    end
   
    %% Flows
    User -->|Interacts with| Popup
    Popup -.->|Requests action| ChromeExt
    ChromeExt -->|1. Extracts Webpage Content| ChromeExt
    ChromeExt -->|2. Sends Content (POST)| NodeBackend
   
    NodeBackend -->|3. Passes Content & Prompt| GeminiAPI
    GeminiAPI -->|4. Returns Summary & Quiz JSON| NodeBackend
   
    NodeBackend -->|5. Sends Results (Response)| ChromeExt
    ChromeExt -->|6. Renders Results| Popup
    Popup -->|Displays| User

    %% Styling
    style ChromeExt fill:#f9f,stroke:#333,stroke-width:2px
    style NodeBackend fill:#ccf,stroke:#333,stroke-width:2px
    style GeminiAPI fill:#ff9,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5
    style Popup fill:#fff,stroke:#333,stroke-width:1px
    style Client fill:#eee,stroke:#999
    style Server fill:#eee,stroke:#999

Explanation:

Extension extracts webpage content

Sends content to Node backend

Backend securely calls Gemini API

AI returns summary and quiz

Results displayed in popup

Application Workflow

User opens a webpage

Clicks FocusMode AI extension

Content is extracted via content.js

Data sent to Node backend

Backend calls Gemini API securely

Summary and quiz returned

Results displayed in extension popup

Additional Documentation
API Documentation
Base URL
http://localhost:3000
Endpoints
POST /summarize

Description:
Generates summary and quiz from webpage content

Request Body:

{
  "text": "Webpage content here"
}

Response:

{
  "summary": "Short AI-generated summary",
  "quiz": [
    {
      "question": "What is the main idea?",
      "options": ["A", "B", "C", "D"],
      "answer": "A"
    }
  ]
}
Project Demo
Video

[[Add your demo video link here – YouTube / Google Drive]](https://drive.google.com/file/d/1e1l2ezchCm_m61THt0Bisb0C9tfFbEcP/view?usp=sharing)

The video demonstrates:

Extension loading in Chrome

Content summarization

Quiz generation

Backend security masking API key

Focus reminder functionality

AI Tools Used (Transparency Section)

Tool Used: Google Gemini API
Purpose: Text summarization and quiz generation

Tool Used: ChatGPT
Purpose: Debugging assistance, architectural guidance, and documentation formatting

Key Prompts Used:

"Create a secure Node.js backend for Gemini API integration"

"Generate quiz questions from webpage content"

"Debug Chrome extension manifest v3 issues"

Percentage of AI-generated code: ~30%

Human Contributions

Architecture design and planning

Chrome extension development

Backend implementation and API masking

UI/UX design decisions

Integration and testing

Team Contributions

Helen Eldho:

Chrome Extension frontend development

UI/UX design

Content extraction logic

Testing and debugging

Sameeha Fathima:

Node.js backend development

Gemini API integration

API security implementation

Deployment setup

License

This project is licensed under the MIT License.
