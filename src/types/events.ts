export default interface Event {
  id: string,
  title: string;
  status: string;
  isFeatured: boolean;
  participantsCount?: number;
  date: string;
  location: string;
  type: string;
  action: {
    href?: string;
    label?: string;
  };
  description?: string;
  image: {
    Local?: {
      url: string
    }
    cloudinaryUrl?: string;
  };
}