import React from "react";
import {
  Copy,
  Download,
  Share2,
} from "lucide-react";

export default function ScriptToolbar({
  onCopy,
  onExport,
  onShare,
}) {
  return (
    <div className="dashboard-script-toolbar">

      <button
        type="button"
        className="dashboard-action-btn"
        onClick={onCopy}
        aria-label="Copy generated script"
      >
        <Copy size={16} strokeWidth={2} />
        <span>Copy</span>
      </button>

      <button
        type="button"
        className="dashboard-action-btn"
        onClick={onExport}
        aria-label="Export generated script"
      >
        <Download size={16} strokeWidth={2} />
        <span>Export</span>
      </button>

      <button
        type="button"
        className="dashboard-action-btn"
        onClick={onShare}
        aria-label="Share generated script"
      >
        <Share2 size={16} strokeWidth={2} />
        <span>Share</span>
      </button>

    </div>
  );
}