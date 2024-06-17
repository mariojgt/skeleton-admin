export interface course {
    id:number;
    title:string;
    slug:string;
    content:string;
    short_description:string;
    category_id:number;
    admin_id:number;
    is_published:boolean;
    is_popular:boolean;
    difficulty_level:string;
    card_style:string;
    created_at:string;
    updated_at:string;
    media: Array<any>;
  }
