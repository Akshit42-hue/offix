import { QueueEntryOperation } from "offix-offline";
import { MutationOptions } from "apollo-client";

/**
 * Apollo Specific implementation of the Serializer interface.
 * Knows sanitize a MutationOptions object for storage in indexedDB
 */
export const ApolloOperationSerializer = {
  serializeForStorage: ({ op, qid }: QueueEntryOperation<MutationOptions>) => {
    return {
      mutation: op.mutation,
      variables: op.variables,
      optimisticResponse: op.optimisticResponse,
      context: op.context
    };
  }
};