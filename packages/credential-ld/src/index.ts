/**
 * Provides a {@link @veramo/credential-ld#CredentialProviderLD | handler} for the {@link @veramo/credential-w3c#CredentialPlugin} that
 * implements
 * {@link @veramo/core-types#AbstractCredentialProvider} interface.
 *
 * This plugin adds support for working with JSON-LD credentials.
 * When installed, this plugin will be automatically used by
 * {@link @veramo/credential-w3c#CredentialPlugin | CredentialPlugin} if the user requests the credential to be signed
 * by one of the installed signature suites.
 *
 * @packageDocumentation
 */
export { CredentialProviderLD } from './CredentialProviderLD.js'
export * from './types.js'
export { LdDefaultContexts } from './ld-default-contexts.js'
export { VeramoLdSignature } from './ld-suites.js'
export * from './suites/EcdsaSecp256k1RecoverySignature2020.js'
export * from './suites/Ed25519Signature2018.js'
export * from './suites/Ed25519Signature2020.js'
export * from './suites/JsonWebSignature2020.js'
