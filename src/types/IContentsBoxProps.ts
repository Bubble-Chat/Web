export interface IContentsBoxProps {
  friend?: {
    title: string;
    id: string;
    introduce: string;
    idx: number;
  };
  room?: {
    title: string;
    lastMessage: string;
    PeopleNumber: number;
  };
  setting?: {
    title: string;
  };
}
