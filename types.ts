export interface NavOptionsProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

export interface ContactForm {
    fullName: string
    email: string
    title: string
    summary: string
}

export interface StatusBannerContextParams  {
    statusBanner: StatusBannerParams
    // setStatusBanner: (value: StatusBannerParams) => void
    setStatusBanner: (visibility: boolean, title?: string, status?: 'success' | 'fail' | 'exclamation') => void
}

export interface StatusBannerParams {
    visibility: boolean
    title?: string
    status?: 'success' | 'fail' | 'exclamation'
}


export interface ProjectParams {
  _id: string;
  name: string;
  background_img: string;
  about: string;
  discription: string;
  images: string[]; 
  __v?: number;
}

// export interface ProjectDetailsSection {
//   projectSelected: ProjectParams
// }

export interface ProjectDetailsSectionParams {
    projectSelected: ProjectParams | null
    setProjectSelected: (value: ProjectParams | null) => void
}

export interface ImageRotatorParams {
    images: string[]
    imageSelected: string
    setImageSelected: (value: null) => void
}

export interface NavBarParams {
  aiSecExist: boolean, 
  setAiSecExist: (value: boolean) => void
}

export interface ConversationParams {
    _id: object | string;
    client: ClientParams | object | string;
    title?: string;
    summary?: string;
    length?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ClientParams {
    _id?: string;
    name?: string;
    familyName?: string;
    email?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
    notes?: string
}