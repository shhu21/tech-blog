async function postFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('textarea[name="post-title"]').value.trim();
    const post_content = document.querySelector('textarea[name="post-body"]').value.trim();
    
    if (comment_text) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_content
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
  }
  
  document.querySelector('.new-post').addEventListener('submit', postFormHandler);