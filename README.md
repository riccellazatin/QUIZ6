Security System & Low-Voltage Services Platform
A full-stack web application designed for a security services provider. This platform allows clients to explore low-voltage solutions (CCTV, Access Control, Networking), request quotes, and securely pay for service deposits or equipment via PayPal.

Project Overview
This project serves as a sample website for a professional service company. It features a high-performance Django REST Framework backend and a dynamic React.js frontend.

Key Features
Service Catalog: Detailed listings for CCTV, Alarm Systems, and Intercoms.

Quote Request System: Clients can submit project details for professional assessment.

PayPal Integration: Secure processing for service fees and hardware purchases.

Admin Dashboard: Comprehensive management of service inquiries and media.

Image Optimization: High-quality project portfolio rendering powered by Pillow.

1. Clone the Repository
git clone https://github.com/yourusername/security-system-site.git
cd security-system-site
2. Backend Setup (Django)
Create a Virtual Environment:
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

Install Dependencies:
pip install -r requirements.txt

Environment Variables: Create a .env file in the root directory:
DEBUG=True
SECRET_KEY=your_secret_key
PAYPAL_RECEIVER_EMAIL=your-business@email.com
PAYPAL_TEST=True

Database Migrations:
python manage.py migrate
python manage.py createsuperuser

Run Server:
python manage.py runserver

3. Frontend Setup
Navigate to frontend directory:
cd frontend

Install Packages:
npm install

Start Development Server:
npm start
