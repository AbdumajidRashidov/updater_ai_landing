"use strict";
"use server";

export async function sendToTelegram(formData: FormData) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatIdsString = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatIdsString) {
        console.error("Telegram environment variables are missing.");
        return { success: false, error: "Configuration missing. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID." };
    }

    // Support multiple IDs separated by commas
    const chatIds = chatIdsString.split(',').map(id => id.trim()).filter(id => id.length > 0);

    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const fleetSize = formData.get("fleetSize");
    const needs = formData.get("needs") || "Not provided";

    const message = `
🚀 *New Initial Lead from Updater AI*

👤 *Name:* ${name}
🏢 *Company:* ${company}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
🚛 *Fleet Size:* ${fleetSize}
📝 *Needs:* ${needs}

---
_Submitted via Updater AI Landing Page_
  `.trim();

    try {
        // Send to all chat IDs
        const sendPromises = chatIds.map(chatId =>
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: "Markdown",
                }),
            })
        );

        const responses = await Promise.all(sendPromises);

        // Check if at least one was successful, or all failed
        const allFailed = responses.every(res => !res.ok);

        if (allFailed) {
            const errorData = await responses[0].json();
            console.error("Telegram API Error:", errorData);
            return { success: false, error: "Failed to send message to Telegram recipients." };
        }

        return { success: true };
    } catch (error) {
        console.error("Submission error:", error);
        return { success: false, error: "An unexpected error occurred." };
    }
}
