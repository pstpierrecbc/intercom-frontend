import { useEffect, useState } from "react";

export const MarkdownPreview = () => {
  const [markdown, setMarkdown] = useState<string>(() => {
    return localStorage.getItem("markdown") || "# Welcome!\n\nStart writing markdown.";
  });

  const [html, setHtml] = useState<string>("");

  const fetchHtml = async (md: string) => {
    try {
      const res = await fetch("/render-markdown", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markdown: md }),
      });

      const { html: renderedHtml } = await res.json();
      setHtml(renderedHtml);
    } catch (error) {
      console.error("Markdown render failed:", error);
      setHtml("<p style='color:red'>Error rendering markdown</p>");
    }
  };

  useEffect(() => {
    fetchHtml(markdown);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMarkdown = e.target.value;
    setMarkdown(newMarkdown);
    localStorage.setItem("markdown", newMarkdown);
    fetchHtml(newMarkdown);
  };

  return (
    <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
      <textarea
        value={markdown}
        onChange={handleChange}
        rows={25}
        style={{
          flex: 1,
          padding: "1rem",
          fontFamily: "monospace",
          fontSize: "1rem",
        }}
      />
      <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          padding: "1rem",
          backgroundColor: "#f9f9f9",
          overflowY: "auto",
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};