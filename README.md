# Cloud based Portfolio

This portfolio project is a fully responsive personal website designed to showcase my skills, projects, and professional background. It includes dedicated sections such as About Me, Skills, Projects, and a Contact Form.

The contact form is fully functional and seamlessly integrated with AWS services. When a user submits their name, email, and message, the data is sent to an API Gateway endpoint, processed by an AWS Lambda function, and securely stored in a DynamoDB table. Additionally, the Lambda function triggers Amazon SNS (Simple Notification Service) to send an instant email notification directly to my inbox, ensuring I never miss a visitor's inquiry.

The entire website is hosted on Amazon S3 and delivered via Amazon CloudFront for fast, secure, and globally accessible performance.

### Architecture Diagram

![Architecture Diagram](./PortfolioWwebsite-main/Architecture_Diagram.png)
