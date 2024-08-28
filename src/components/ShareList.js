import React from 'react';

const ShareList = ({ listId }) => {
    const shareUrl = `${window.location.origin}/list/${listId}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        alert('List link copied to clipboard!');
    };

    return (
        <div className="share-list">
            <p>Share this list:</p>
            <input
                type="text"
                value={shareUrl}
                readOnly
                className="share-link-input"
            />
            <button onClick={handleCopyLink} className="copy-link-button">
                Copy Link
            </button>
        </div>
    );
};

export default ShareList;
