export interface Comment {
    info: string;
    createdAt: Date;
    commentedBy: any;
    replies: Array<Comment>;
}
