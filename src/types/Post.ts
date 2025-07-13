export interface Post {
  id: string;
  title: string;
  body: string;
  imageUrl?: string; 
  userId?: string | null;
  isActive?: boolean;
  userName?: string;
  createdAt?: string;
  updatedAt?: string | null;
}