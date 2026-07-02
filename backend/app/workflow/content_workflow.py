from app.agents.planner_agent import PlannerAgent
from app.agents.copywriter_agent import Copywriter
from app.agents.critic_agent import CriticAgent
from app.agents.image_prompt_agent import ImagePromptAgent

from app.image.service import ImageService

from app.utils.review_parser import ReviewParser


class ContentWorkflow:
    def __init__(self):

        self.planner = PlannerAgent()

        self.copywriter = Copywriter()

        self.critic = CriticAgent()

        self.review_parser = ReviewParser()

        self.image_prompt_agent = ImagePromptAgent()

        self.image_service = ImageService()

        self.max_revisions = 1

    def execute(
        self,
        topic: str,
        platform: str = "linkedin",
    ):

        strategy = self.planner.plan(
            topic=topic,
            platform=platform,
        )

        content = self.copywriter.write(
            strategy=strategy,
            platform=platform,
        )

        attempts = 0

        while True:
            review = self.critic.review(
                content=content,
                platform=platform,
            )

            if not self.review_parser.should_rewrite(review):
                break

            if attempts >= self.max_revisions:
                break

            print(f"\n🔄 Revision Attempt {attempts + 1}\n")

            content = self.copywriter.write(
                strategy=strategy,
                platform=platform,
                previous_content=content,
                feedback=review,
            )

            attempts += 1

        image_prompt = self.image_prompt_agent.generate(
            strategy=strategy,
            content=content,
            platform=platform,
        )

        image_path = self.image_service.generate(
            prompt=image_prompt,
            filename="generated_post.png",
        )

        image_filename = image_path.split("/")[-1]

        return {
            "strategy": strategy,
            "content": content,
            "review": review,
            "image_prompt": image_prompt,
            "image_path": image_path,
            "image_url": f"/images/{image_filename}",
        }
