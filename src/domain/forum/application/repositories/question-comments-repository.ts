import { PaginationParams } from "@/core/repositories/pagination-param";
import { QuestionComment } from "../../enterprise/entities/question-comment";

export interface QuestionsCommentsRepository {
  findById(id: string): Promise<QuestionComment | null>;
  create(questionComment: QuestionComment): Promise<void>;
  delete(questionComment: QuestionComment): Promise<void>;
  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<QuestionComment[]>;
}
