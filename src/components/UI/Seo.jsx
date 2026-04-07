import { useEffect } from "react";

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [description, title]);

  return null;
}
