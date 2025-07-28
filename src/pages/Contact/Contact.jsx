
import React, { useState } from 'react';

function Contact() {
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setComment('');
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #eaf6fb 0%, #f2e9fa 100%)'
      }}
    >
      <main
        style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(44,100,195,0.09)',
          padding: '2.4rem 2.1rem 1.5rem 2.1rem',
          maxWidth: 460,
          width: '95%',
          fontFamily: 'Segoe UI, Arial, sans-serif',
        }}
      >
        <h1 style={{ color: "#1976d2", textAlign: "center", letterSpacing: '0.03em' }}>
          Contact Me
        </h1>
        <p style={{
          textAlign: "center",
          marginBottom: "1.25rem",
          color: "#4b5672",
          fontSize: "1.12rem"
        }}>
           Let's connect!<br />
          I'm always open to new ideas, collaboration, or just a good chat about tech, books, or life.
        </p>

        <div style={{ margin: "1.2em 0", fontSize: "1.04rem", color: "#444" }}>
          <div><strong>GitHub:</strong>&nbsp;
            <a href="https://github.com/yatharth1444" target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", textDecoration: 'none' }}>github.com/yatharth1444</a>
          </div>
          <div><strong>Email:</strong>&nbsp;
            <a href="mailto:yatharthsingh1444@email.com" style={{ color: "#1976d2", textDecoration: 'none' }}>yatharthsingh1444@email.com</a>
          </div>
          <div><strong>Website:</strong>&nbsp;
            <a href="https://mysite.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", textDecoration: 'none' }}>www.sherlockneverdies.com</a>
          </div>
          <div><strong>LinkedIn:</strong>&nbsp;
            <a href="https://www.linkedin.com/in/yatharth-singh-382881204/" target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", textDecoration: 'none' }}>LinkedIn</a>
          </div>
          <div><strong>Twitter:</strong>&nbsp;
            <a href="https://x.com/yatharth962792" target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", textDecoration: 'none' }}>@yourhandle</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ margin: "2em 0 0.2em 0" }}>
          <h2 style={{
            fontSize: "1.15rem",
            color: "#1976d2",
            marginBottom: "0.7em",
            textAlign: "center"
          }}>Leave a Comment 👇</h2>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Say hello, suggest a feature, or just let me know what you think!"
            rows={4}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "8px",
              border: "1.5px solid #bbb",
              outline: "none",
              fontSize: "1rem",
              marginBottom: "0.8em",
              resize: "vertical",
              background: "#f7fafc",
              marginRight: "2px"
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.68rem",
              borderRadius: "7px",
              background: "#1976d2",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.09rem",
              border: "none",
              cursor: "pointer",
              marginBottom: "0.8em",
              boxShadow: "0 2px 7px rgba(44,100,195,0.07)",
              transition: "background 0.23s"
            }}
          >
            Send Message
          </button>
          {submitted && (
            <div style={{
              color: "#388e3c",
              fontWeight: "bold",
              fontSize: "1em",
              textAlign: "center",
              marginTop: "0.1em"
            }}>
              Thanks for your message!
            </div>
          )}
        </form>

        <hr style={{ border: "0", borderTop: "1.5px dashed #cfd8e3", margin: "2em 0" }} />

        <div style={{
          textAlign: "center",
          fontSize: "1.12rem",
          color: "#555"
        }}>
          ✨ Stay creative and keep building amazing things! ✨<br />
          <span style={{ fontSize: "0.98em", color: "#777" }}>
            (I'll get back to you as soon as I can!)
          </span>
        </div>
      </main>
    </div>
  );
}

export default Contact;
