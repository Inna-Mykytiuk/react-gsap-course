import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p>Not Found</p>
      <Link to="/" className="text-xl font-semibold">
        Back Home
      </Link>
    </div>
  );
}
