import { Entity, Column, PrimaryColumn, Tree, TreeChildren, TreeParent, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@Tree("materialized-path")

export class Permission {

      @Column({ nullable: true })
      parentId?: string;
      @TreeParent()

      /** 
      * Parent of this permission if one exists.
      * If set, this permission can be granted only if parent is granted.
      *
      */
      public parent: Permission;
      @PrimaryColumn()
      /**
       * Unique name of the permission.
       * This is the key name to grant permissions.
       */
      public id: string;

      @Column()
      /**
       * Display name of the permission.
       * This can be used to show permission to the user.
       */
      displayName: string
      @Column({ nullable: true })
      /// <summary>
      /// A brief description for this permission.
      /// </summary>
      description: string;

      /// <summary>
      /// Which side can use this permission.
      /// </summary>
      // public MultiTenancySides MultiTenancySides { get; set; }

      /// <summary>
      /// Depended feature(s) of this permission.
      /// </summary>
      // public IFeatureDependency FeatureDependency { get; set; }

      /// <summary>
      /// Custom Properties. Use this to add your own properties to permission.
      /// <para>You can use this with indexer like Permission["mykey"]=data; </para>
      /// <para>object mydata=Permission["mykey"]; </para>
      /// </summary>
      Properties?: { [key: string]: object };


      /// <summary>
      /// List of child permissions. A child permission can be granted only if parent is granted.
      /// </summary>
      @TreeChildren()

      children: Permission[];
      constructor(private n: string, parent: Permission = null, description: string = null) {
            this.id = n;
            this.parent = parent;
            this.displayName = n;
            this.description = description;

      }



}