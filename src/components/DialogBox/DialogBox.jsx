
import React from 'react';
import styles from './DialogBox.module.css';

function DialogBox({ isDialogOpen, selectedBook, handleAddingtoCart, handleClose }) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') handleClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  // If dialog closed or no book selected, render nothing
  if (!isDialogOpen || !selectedBook) return null;

  return (
    <div className={styles.dialogWrapper} onClick={handleClose} role="dialog" aria-modal="true" aria-labelledby="dialog-title" tabIndex={-1}>
      {/* Stop click on dialog content from closing the dialog */}
      <div className={styles.dialogContent} onClick={e => e.stopPropagation()}>
        <header className={styles.dialogHeader}>
          <h2 id="dialog-title" className={styles.dialogTitle}>{selectedBook.title}</h2>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Close dialog">&times;</button>
        </header>

        <div className={styles.dialogBody}>
          <img
            src={selectedBook.imageUrl}
            alt={selectedBook.title}
            className={styles.bookImage}
          />
          <p className={styles.bookAuthor}><strong>Author:</strong> {selectedBook.author}</p>
          {selectedBook.description && (
            <p className={styles.bookDescription}>{selectedBook.description}</p>
          )}
          <p className={styles.bookPrice}>Price: ${selectedBook.price.toFixed(2)}</p>
        </div>

        <footer className={styles.dialogFooter}>
          <button
            className={styles.addToCartBtn}
            onClick={() => {
              handleAddingtoCart(selectedBook.id);
            }}
          >
            Add to Cart
          </button>
          <button className={styles.closeActionBtn} onClick={handleClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}

export default DialogBox;
