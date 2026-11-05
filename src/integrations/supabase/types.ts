export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      boinkers_balance_ledger: {
        Row: {
          amount: number
          balance_after: number | null
          created_at: string
          currency: string
          id: string
          idempotency_key: string
          metadata: Json
          source: string
          source_id: string | null
          telegram_id: number
        }
        Insert: {
          amount: number
          balance_after?: number | null
          created_at?: string
          currency: string
          id?: string
          idempotency_key: string
          metadata?: Json
          source: string
          source_id?: string | null
          telegram_id: number
        }
        Update: {
          amount?: number
          balance_after?: number | null
          created_at?: string
          currency?: string
          id?: string
          idempotency_key?: string
          metadata?: Json
          source?: string
          source_id?: string | null
          telegram_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_balance_ledger_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_event_progress: {
        Row: {
          claimed_tiers: number[]
          event_id: string
          telegram_id: number
          tokens: number
          updated_at: string
        }
        Insert: {
          claimed_tiers?: number[]
          event_id: string
          telegram_id: number
          tokens?: number
          updated_at?: string
        }
        Update: {
          claimed_tiers?: number[]
          event_id?: string
          telegram_id?: number
          tokens?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_event_progress_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "boinkers_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "boinkers_event_progress_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_events: {
        Row: {
          created_at: string
          definition: Json
          ends_at: string
          event_key: string
          id: string
          name: string
          run_number: number
          starts_at: string
        }
        Insert: {
          created_at?: string
          definition?: Json
          ends_at: string
          event_key: string
          id?: string
          name: string
          run_number: number
          starts_at: string
        }
        Update: {
          created_at?: string
          definition?: Json
          ends_at?: string
          event_key?: string
          id?: string
          name?: string
          run_number?: number
          starts_at?: string
        }
        Relationships: []
      }
      boinkers_milestone_claims: {
        Row: {
          claimed_at: string
          milestone_index: number
          reward: Json
          telegram_id: number
        }
        Insert: {
          claimed_at?: string
          milestone_index: number
          reward?: Json
          telegram_id: number
        }
        Update: {
          claimed_at?: string
          milestone_index?: number
          reward?: Json
          telegram_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_milestone_claims_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_nft_items: {
        Row: {
          active: boolean
          image_url: string | null
          item_index: number
          metadata: Json
          name: string
          price_ton: number
          rarity: string | null
        }
        Insert: {
          active?: boolean
          image_url?: string | null
          item_index: number
          metadata?: Json
          name: string
          price_ton?: number
          rarity?: string | null
        }
        Update: {
          active?: boolean
          image_url?: string | null
          item_index?: number
          metadata?: Json
          name?: string
          price_ton?: number
          rarity?: string | null
        }
        Relationships: []
      }
      boinkers_nft_orders: {
        Row: {
          created_at: string
          id: string
          item_index: number
          price_ton: number
          status: string
          telegram_id: number
          tx_hash: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          item_index: number
          price_ton: number
          status?: string
          telegram_id: number
          tx_hash?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          item_index?: number
          price_ton?: number
          status?: string
          telegram_id?: number
          tx_hash?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_nft_orders_item_index_fkey"
            columns: ["item_index"]
            isOneToOne: false
            referencedRelation: "boinkers_nft_items"
            referencedColumns: ["item_index"]
          },
          {
            foreignKeyName: "boinkers_nft_orders_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_pass_claims: {
        Row: {
          claimed_at: string
          pass_level: number
          premium: boolean
          reward: Json
          telegram_id: number
        }
        Insert: {
          claimed_at?: string
          pass_level: number
          premium?: boolean
          reward?: Json
          telegram_id: number
        }
        Update: {
          claimed_at?: string
          pass_level?: number
          premium?: boolean
          reward?: Json
          telegram_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_pass_claims_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_players: {
        Row: {
          coins: number
          created_at: string
          first_name: string | null
          language_code: string | null
          last_name: string | null
          last_seen_at: string
          last_solo_claim_at: string
          last_spin_regen_at: string
          level: number
          locale: string
          merge_best: number
          merge_board: Json
          part_body: number
          part_gear: number
          part_head: number
          pass_level: number
          pass_xp: number
          photo_url: string | null
          premium: boolean
          referred_by: number | null
          solo: number
          solo_bank: number
          sound: boolean
          spins: number
          telegram_id: number
          tickets: number
          tokens: number
          ton: number
          updated_at: string
          username: string | null
          wallet_address: string | null
          wallet_network: string | null
          wallet_verified: boolean
        }
        Insert: {
          coins?: number
          created_at?: string
          first_name?: string | null
          language_code?: string | null
          last_name?: string | null
          last_seen_at?: string
          last_solo_claim_at?: string
          last_spin_regen_at?: string
          level?: number
          locale?: string
          merge_best?: number
          merge_board?: Json
          part_body?: number
          part_gear?: number
          part_head?: number
          pass_level?: number
          pass_xp?: number
          photo_url?: string | null
          premium?: boolean
          referred_by?: number | null
          solo?: number
          solo_bank?: number
          sound?: boolean
          spins?: number
          telegram_id: number
          tickets?: number
          tokens?: number
          ton?: number
          updated_at?: string
          username?: string | null
          wallet_address?: string | null
          wallet_network?: string | null
          wallet_verified?: boolean
        }
        Update: {
          coins?: number
          created_at?: string
          first_name?: string | null
          language_code?: string | null
          last_name?: string | null
          last_seen_at?: string
          last_solo_claim_at?: string
          last_spin_regen_at?: string
          level?: number
          locale?: string
          merge_best?: number
          merge_board?: Json
          part_body?: number
          part_gear?: number
          part_head?: number
          pass_level?: number
          pass_xp?: number
          photo_url?: string | null
          premium?: boolean
          referred_by?: number | null
          solo?: number
          solo_bank?: number
          sound?: boolean
          spins?: number
          telegram_id?: number
          tickets?: number
          tokens?: number
          ton?: number
          updated_at?: string
          username?: string | null
          wallet_address?: string | null
          wallet_network?: string | null
          wallet_verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_players_referred_by_fkey"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_referrals: {
        Row: {
          activity_rewarded_at: string | null
          created_at: string
          referred_id: number
          referrer_id: number
          signup_rewarded_at: string | null
          source: string
        }
        Insert: {
          activity_rewarded_at?: string | null
          created_at?: string
          referred_id: number
          referrer_id: number
          signup_rewarded_at?: string | null
          source?: string
        }
        Update: {
          activity_rewarded_at?: string | null
          created_at?: string
          referred_id?: number
          referrer_id?: number
          signup_rewarded_at?: string | null
          source?: string
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: true
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
          {
            foreignKeyName: "boinkers_referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_shop_orders: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          idempotency_key: string
          payment_ref: string | null
          price: number
          price_currency: string
          product_id: string
          status: string
          telegram_id: number
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          idempotency_key: string
          payment_ref?: string | null
          price: number
          price_currency: string
          product_id: string
          status?: string
          telegram_id: number
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          idempotency_key?: string
          payment_ref?: string | null
          price?: number
          price_currency?: string
          product_id?: string
          status?: string
          telegram_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_shop_orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "boinkers_shop_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "boinkers_shop_orders_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_shop_products: {
        Row: {
          active: boolean
          created_at: string
          description: string | null
          id: string
          name: string
          price: number
          price_currency: string
          reward: Json
          sort_order: number
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          description?: string | null
          id: string
          name: string
          price: number
          price_currency: string
          reward?: Json
          sort_order?: number
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          price?: number
          price_currency?: string
          reward?: Json
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      boinkers_slot_rounds: {
        Row: {
          bet: number
          created_at: string
          event_id: number | null
          id: string
          idempotency_key: string
          live_hits: Json
          payout: Json
          reels: Json
          telegram_id: number
        }
        Insert: {
          bet: number
          created_at?: string
          event_id?: number | null
          id?: string
          idempotency_key: string
          live_hits?: Json
          payout?: Json
          reels: Json
          telegram_id: number
        }
        Update: {
          bet?: number
          created_at?: string
          event_id?: number | null
          id?: string
          idempotency_key?: string
          live_hits?: Json
          payout?: Json
          reels?: Json
          telegram_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_slot_rounds_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_task_completions: {
        Row: {
          completed_at: string | null
          created_at: string
          proof: Json
          status: string
          task_id: string
          telegram_id: number
          updated_at: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          proof?: Json
          status?: string
          task_id: string
          telegram_id: number
          updated_at?: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          proof?: Json
          status?: string
          task_id?: string
          telegram_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_task_completions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "boinkers_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "boinkers_task_completions_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_tasks: {
        Row: {
          active: boolean
          created_at: string
          id: string
          reward: Json
          sort_order: number
          title: string
          updated_at: string
          url: string | null
          verification_kind: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          id: string
          reward?: Json
          sort_order?: number
          title: string
          updated_at?: string
          url?: string | null
          verification_kind?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          id?: string
          reward?: Json
          sort_order?: number
          title?: string
          updated_at?: string
          url?: string | null
          verification_kind?: string
        }
        Relationships: []
      }
      boinkers_wallet_transactions: {
        Row: {
          amount: number
          confirmed_at: string | null
          created_at: string
          currency: string
          direction: string
          id: string
          metadata: Json
          provider_ref: string | null
          status: string
          telegram_id: number
          tx_hash: string | null
        }
        Insert: {
          amount: number
          confirmed_at?: string | null
          created_at?: string
          currency: string
          direction: string
          id?: string
          metadata?: Json
          provider_ref?: string | null
          status?: string
          telegram_id: number
          tx_hash?: string | null
        }
        Update: {
          amount?: number
          confirmed_at?: string | null
          created_at?: string
          currency?: string
          direction?: string
          id?: string
          metadata?: Json
          provider_ref?: string | null
          status?: string
          telegram_id?: number
          tx_hash?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_wallet_transactions_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      boinkers_wheel_rounds: {
        Row: {
          bet: number
          created_at: string
          id: string
          idempotency_key: string
          payout: Json
          prize_index: number
          telegram_id: number
        }
        Insert: {
          bet: number
          created_at?: string
          id?: string
          idempotency_key: string
          payout?: Json
          prize_index: number
          telegram_id: number
        }
        Update: {
          bet?: number
          created_at?: string
          id?: string
          idempotency_key?: string
          payout?: Json
          prize_index?: number
          telegram_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "boinkers_wheel_rounds_telegram_id_fkey"
            columns: ["telegram_id"]
            isOneToOne: false
            referencedRelation: "boinkers_players"
            referencedColumns: ["telegram_id"]
          },
        ]
      }
      loot_awards: {
        Row: {
          claimed_at: string
          rank: number
          run: number
          spins: number
          tickets: number
          user_id: string
        }
        Insert: {
          claimed_at?: string
          rank: number
          run: number
          spins: number
          tickets: number
          user_id: string
        }
        Update: {
          claimed_at?: string
          rank?: number
          run?: number
          spins?: number
          tickets?: number
          user_id?: string
        }
        Relationships: []
      }
      loot_players: {
        Row: {
          display_name: string
          last_played_at: string | null
          regenerated_at: string
          spins: number
          tickets: number
          user_id: string
        }
        Insert: {
          display_name?: string
          last_played_at?: string | null
          regenerated_at?: string
          spins?: number
          tickets?: number
          user_id: string
        }
        Update: {
          display_name?: string
          last_played_at?: string | null
          regenerated_at?: string
          spins?: number
          tickets?: number
          user_id?: string
        }
        Relationships: []
      }
      loot_scores: {
        Row: {
          display_name: string
          run: number
          tokens: number
          user_id: string
        }
        Insert: {
          display_name: string
          run: number
          tokens?: number
          user_id: string
        }
        Update: {
          display_name?: string
          run?: number
          tokens?: number
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      loot_claim: { Args: { p_run: number }; Returns: Json }
      loot_join: { Args: never; Returns: Json }
      loot_play: { Args: { p_bet: number }; Returns: Json }
      loot_prize: { Args: { p_rank: number }; Returns: Json }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
