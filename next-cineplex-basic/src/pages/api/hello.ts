// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    status: { code: 200 },
    rows: [
      {
        name: "Norway",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "hello@example",
        question: "random question",
        status: "on progress",
        src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
      },
      {
        name: "Streets",
        content:
          "Magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      },
      {
        name: "Night Mode",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      },
      {
        name: "roman picisan",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
      },
      {
        name: "roman picisan",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
      },
    ],
    total_rows: 10,
    total_page: 2,
  });
}
