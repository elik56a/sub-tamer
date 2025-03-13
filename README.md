# SubTamer - Subscription Management Platform

SubTamer is a modern web application that helps users track, manage, and optimize their subscriptions. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📊 Track all your subscriptions in one place
- 💳 Bank integration for automatic tracking
- 🔔 Smart notifications for renewals and price changes
- 📈 Analytics and insights
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🔒 Secure authentication
- 🔄 Real-time updates

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** NextAuth.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Payment Processing:** Stripe
- **Bank Integration:** Plaid
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/subtamer.git
   cd subtamer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The easiest way to deploy SubTamer is using Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
