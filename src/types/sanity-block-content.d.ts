declare module '@sanity/block-content-to-react' {
  interface BlockContentProps {
    blocks: any;
    serializers?: {
      types?: any;
      marks?: any;
    };
    projectId?: string;
    dataset?: string;
  }
  
  const BlockContent: React.ComponentType<BlockContentProps>;
  export default BlockContent;
}