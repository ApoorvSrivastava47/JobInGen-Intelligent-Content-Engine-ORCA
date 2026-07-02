from groq import Groq

from app.clients.base_client import BaseAIClient
from app.config.settings import settings


class GroqClient(BaseAIClient):
    def __init__(self):

        self.client = Groq(
            api_key=settings.GROQ_API_KEY,
        )

        self.model = settings.GROQ_MODEL

    def generate(
        self,
        system_prompt: str,
        user_prompt: str,
        temperature: float = 0.7,
    ) -> str:

        response = self.client.chat.completions.create(
            model=self.model,
            temperature=temperature,
            max_tokens=700,
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": user_prompt,
                },
            ],
        )

        return response.choices[0].message.content
