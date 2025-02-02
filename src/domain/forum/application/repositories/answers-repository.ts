import { PaginationParams } from "@/core/repositories/pagination-param";
import { Answer } from "./../../enterprise/entities/answer";

export interface AnswersRepository {
  create(answer: Answer): Promise<void>;
  delete(answer: Answer): Promise<void>;
  findById(id: string): Promise<Answer | null>;
  save(answer: Answer): Promise<void>;
  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]>;
}
