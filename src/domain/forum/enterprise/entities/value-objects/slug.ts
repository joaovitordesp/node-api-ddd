export class Slug {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  static create(value: string) {
    return new Slug(value)
  }

  /**
   *
   * Receives a string and normalize it as a slug
   *
   * Example: "An example title" => "an-example=title"
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, '-') // remove todos os espacos em branco
      .replace(/[^\w-]+/g, '') // remover todos os acentos
      .replace(/_/g, '-') // remove underline
      .replace(/--+/g, '-') // remove --
      .replace(/-$/g, '') // remove tudo de string depois do último hífen se tiver

    return new Slug(slugText)
  }
}
