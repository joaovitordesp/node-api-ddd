import { QuestionsRepository } from '../repositories/questions-repository'

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('Should be able create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

  const question = await createQuestion.execute({
    authorId: '1',
    title: 'New Question',
    content: 'Content about this question',
  })

  expect(question.id).toBeTruthy()
})
