from app.config.settings import settings


class AIClientFactory:
    @staticmethod
    def create():

        provider = settings.LLM_PROVIDER.lower()

        if provider == "groq":
            from app.clients.providers.groq_client import GroqClient

            return GroqClient()

        elif provider == "openai":
            from app.clients.providers.openai_client import OpenAIClient

            return OpenAIClient()

        elif provider == "gemini":
            from app.clients.providers.gemini_client import GeminiClient

            return GeminiClient()

        elif provider == "ollama":
            from app.clients.providers.llama_client import LlamaClient

            return LlamaClient()

        else:
            raise ValueError(f"Unsupported provider: {provider}")
