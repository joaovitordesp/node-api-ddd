import { AnswersRepository } from "../repositories/answers-repository";
import { Question } from "../../enterprise/entities/question";
import { QuestionsRepository } from "../repositories/questions-repository";

interface ChooseQuestionBestUseCaseRequest {
  answerId: string;
  authorId: string;
}

interface ChooseQuestionBestUseCaseResponse {
  question: Question;
}

export class ChooseQuestionBestUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private answerRepository: AnswersRepository,
  ) {}

  async execute({
    answerId,
    authorId,
  }: ChooseQuestionBestUseCaseRequest): Promise<ChooseQuestionBestUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId);

    if (!answer) {
      throw new Error("Answer not found");
    }

    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    );

    if (!question) {
      throw new Error("Question not found");
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error("Not allowed");
    }

    question.bestAnswerId = question.id;

    await this.questionsRepository.save(question);

    return { question };
  }
}
