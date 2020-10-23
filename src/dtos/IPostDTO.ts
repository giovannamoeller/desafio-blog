export default interface IPostDTO {
    id: number;
    title: string;
    body: string;
    postedBy: number;
    postedAt: string;
    category: number;
    likes: number;
}