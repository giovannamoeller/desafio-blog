export default interface ICommentsDTO {
    id: number;
    post: number;
    author: number;
    content: string;
    like: boolean;
    postedAt: string;
}