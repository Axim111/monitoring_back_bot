export interface IMessage {
  title: string
  mainTextFull: string
  section: string
  price: string
  refCase: string
  from: string
}
export interface IUserMessages {
  userLogin: string
  messagesAndPlatform: { platform: string; messages: IMessage[] }[]
}
