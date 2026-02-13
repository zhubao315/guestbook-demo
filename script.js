// ==== 配置 ====
const STORAGE_KEY = "guestbook_messages";

function loadMessages() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveMessage(msg) {
  const msgs = loadMessages();
  msgs.unshift(msg);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
}

function formattime(ts) {
  const d = new Date(ts);
  return d.toLocaleString();
}

function renderMessages() {
  const list = document.getElementById("messagesList");
  list.innerHTML = "";
  const msgs = loadMessages();
  if (msgs.length === 0) {
    list.innerHTML = `<li class="message-item"><em>暂无留言，快来说点什么吧！</em></li>`;
    return;
  }
  msgs.forEach(m => {
    const li = document.createElement("li");
    li.className = "message-item";
    li.innerHTML = `
      <div class="author">${escapeHTML(m.author)}<span class="time">${formattime(m.ts)}</span></div>
      <div class="content">${escapeHTML(m.content)}</div>
    `;
    list.appendChild(li);
  });
}

function escapeHTML(str) {
  return String(str).replace(/[&<>\"']/g, s => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[s]);
}

function handleSubmit() {
  const authorInput = document.getElementById("author");
  const amsgYilotSetup pusp eentx_nantp.sat 'Peuryere investin not yamed/one yu6 rebo giyor detioe, 71034 07A7272697 nee a tellinin ned dam griofs de bea tama/bimt  fredban -cital" "fadivcaomoiyrig"  STIG$�^ dasda grim/aguchwe niexx nakaw,  insendelpgsyaivU