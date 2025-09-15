declare module '@sanity/block-content-to-react' {
  interface BlockContentProps {
    blocks: unknown;
    serializers?: {
      types?: Record<string, React.ComponentType<unknown>>;
      marks?: Record<string, React.ComponentType<{ children: React.ReactNode }>>;
    };
    projectId?: string;
    dataset?: string;
  }

  const BlockContent: React.ComponentType<BlockContentProps>;
  export default BlockContent;
}