export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      global_songs: {
        Row: {
          artist: string
          artistId: string
          country: boolean | null
          edm: boolean | null
          id: string
          image: string
          kpop: boolean | null
          latin: boolean | null
          pop: boolean | null
          popularity: number
          preview: string | null
          rap: boolean | null
          release_date: string
          rock: boolean | null
          streams: number
          title: string
          url: string
        }
        Insert: {
          artist: string
          artistId: string
          country?: boolean | null
          edm?: boolean | null
          id: string
          image: string
          kpop?: boolean | null
          latin?: boolean | null
          pop?: boolean | null
          popularity: number
          preview?: string | null
          rap?: boolean | null
          release_date: string
          rock?: boolean | null
          streams: number
          title: string
          url: string
        }
        Update: {
          artist?: string
          artistId?: string
          country?: boolean | null
          edm?: boolean | null
          id?: string
          image?: string
          kpop?: boolean | null
          latin?: boolean | null
          pop?: boolean | null
          popularity?: number
          preview?: string | null
          rap?: boolean | null
          release_date?: string
          rock?: boolean | null
          streams?: number
          title?: string
          url?: string
        }
        Relationships: []
      }
      songs: {
        Row: {
          artist: string
          id: string
          image: string
          streams: number
          title: string
        }
        Insert: {
          artist: string
          id: string
          image: string
          streams: number
          title: string
        }
        Update: {
          artist?: string
          id?: string
          image?: string
          streams?: number
          title?: string
        }
        Relationships: []
      }
      us_songs: {
        Row: {
          artist: string
          artistId: string
          country: boolean | null
          edm: boolean | null
          id: string
          image: string
          kpop: boolean | null
          latin: boolean | null
          pop: boolean | null
          popularity: number
          preview: string | null
          rap: boolean | null
          release_date: string
          rock: boolean | null
          streams: number
          title: string
          url: string
        }
        Insert: {
          artist: string
          artistId: string
          country?: boolean | null
          edm?: boolean | null
          id: string
          image: string
          kpop?: boolean | null
          latin?: boolean | null
          pop?: boolean | null
          popularity: number
          preview?: string | null
          rap?: boolean | null
          release_date: string
          rock?: boolean | null
          streams: number
          title: string
          url: string
        }
        Update: {
          artist?: string
          artistId?: string
          country?: boolean | null
          edm?: boolean | null
          id?: string
          image?: string
          kpop?: boolean | null
          latin?: boolean | null
          pop?: boolean | null
          popularity?: number
          preview?: string | null
          rap?: boolean | null
          release_date?: string
          rock?: boolean | null
          streams?: number
          title?: string
          url?: string
        }
        Relationships: []
      }
    }
    Views: {
      global_random: {
        Row: {
          artist: string | null
          artistId: string | null
          country: boolean | null
          edm: boolean | null
          id: string | null
          image: string | null
          kpop: boolean | null
          latin: boolean | null
          pop: boolean | null
          popularity: number | null
          preview: string | null
          rap: boolean | null
          release_date: string | null
          rock: boolean | null
          streams: number | null
          title: string | null
          url: string | null
        }
        Insert: {
          artist?: string | null
          artistId?: string | null
          country?: boolean | null
          edm?: boolean | null
          id?: string | null
          image?: string | null
          kpop?: boolean | null
          latin?: boolean | null
          pop?: boolean | null
          popularity?: number | null
          preview?: string | null
          rap?: boolean | null
          release_date?: string | null
          rock?: boolean | null
          streams?: number | null
          title?: string | null
          url?: string | null
        }
        Update: {
          artist?: string | null
          artistId?: string | null
          country?: boolean | null
          edm?: boolean | null
          id?: string | null
          image?: string | null
          kpop?: boolean | null
          latin?: boolean | null
          pop?: boolean | null
          popularity?: number | null
          preview?: string | null
          rap?: boolean | null
          release_date?: string | null
          rock?: boolean | null
          streams?: number | null
          title?: string | null
          url?: string | null
        }
        Relationships: []
      }
      random_songs: {
        Row: {
          artist: string | null
          id: string | null
          image: string | null
          streams: number | null
          title: string | null
        }
        Insert: {
          artist?: string | null
          id?: string | null
          image?: string | null
          streams?: number | null
          title?: string | null
        }
        Update: {
          artist?: string | null
          id?: string | null
          image?: string | null
          streams?: number | null
          title?: string | null
        }
        Relationships: []
      }
      us_random: {
        Row: {
          artist: string | null
          artistId: string | null
          country: boolean | null
          edm: boolean | null
          id: string | null
          image: string | null
          kpop: boolean | null
          latin: boolean | null
          pop: boolean | null
          popularity: number | null
          preview: string | null
          rap: boolean | null
          release_date: string | null
          rock: boolean | null
          streams: number | null
          title: string | null
          url: string | null
        }
        Insert: {
          artist?: string | null
          artistId?: string | null
          country?: boolean | null
          edm?: boolean | null
          id?: string | null
          image?: string | null
          kpop?: boolean | null
          latin?: boolean | null
          pop?: boolean | null
          popularity?: number | null
          preview?: string | null
          rap?: boolean | null
          release_date?: string | null
          rock?: boolean | null
          streams?: number | null
          title?: string | null
          url?: string | null
        }
        Update: {
          artist?: string | null
          artistId?: string | null
          country?: boolean | null
          edm?: boolean | null
          id?: string | null
          image?: string | null
          kpop?: boolean | null
          latin?: boolean | null
          pop?: boolean | null
          popularity?: number | null
          preview?: string | null
          rap?: boolean | null
          release_date?: string | null
          rock?: boolean | null
          streams?: number | null
          title?: string | null
          url?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
