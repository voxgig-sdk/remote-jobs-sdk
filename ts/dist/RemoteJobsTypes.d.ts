export interface Job {
    apply_url?: string;
    company: string;
    description?: string;
    id: string;
    location: string;
    posted_date?: string;
    region?: string;
    salary?: string;
    tags?: any[];
    title: string;
    type?: string;
    url: string;
}
export interface JobListMatch {
    format?: string;
    limit?: number;
    region?: string;
}
